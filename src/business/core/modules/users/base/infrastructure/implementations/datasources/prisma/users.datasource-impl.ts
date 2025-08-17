import prisma from "@/lib/prisma";
import { hash } from "bcryptjs";

//* Contracts
import { UsersDatasource } from "../../../../domain/contracts/users.datasource";

//* Interfaces
import {
  FindAllUsers,
  Users,
  CreateUsers,
  UpdateUsers,
  RemoveUsers,
  GetAllUsers,
} from "../../../../domain/interfaces/users.interfaces";

//* Dtos
import { CreateUsersDto, UpdateUsersDto } from "./validations.dto";

export class UsersPrismaDatasourceImpl implements UsersDatasource {
  //#region --------------------------------- Methods ---------------------------------

  async findAll(params?: GetAllUsers): Promise<FindAllUsers> {
    let take = params?.take;
    let skip = params?.skip;

    const [data, total] = await prisma.$transaction([
      prisma.user.findMany({ take, skip }),
      prisma.user.count(),
    ]);

    return { data, total };
  }

  async findOne(field: keyof Users, value: string): Promise<Users> {
    const record = await prisma.user.findFirst({
      where: { [field]: value },
      include: { permissions: { include: { roles: true } } },
    });

    if (!record) throw new Error("Record not found");

    return record;
  }

  async create(data: CreateUsers): Promise<Users> {
    let body = await CreateUsersDto.validate(data);

    if (!body) throw new Error("Body is required");

    if (body.password) {
      const password = await hash(body.password, 10);
      body = { ...body, password };
    }

    const record = await prisma.user.create({ data: body });
    return record;
  }

  async update(id: string, data: UpdateUsers): Promise<Users> {
    const recordExist = await prisma.user.findFirst({ where: { id } });
    let body = await UpdateUsersDto.validate(data);

    if (!recordExist) throw new Error("Record not found");

    if (body.password) {
      const password = await hash(body.password, 10);
      body = { ...body, password };
    }

    const record = await prisma.user.update({
      where: { id },
      data: body,
    });

    return record;
  }

  async remove(id: string): Promise<RemoveUsers> {
    const recordExist = await prisma.user.findFirst({ where: { id } });

    if (!recordExist) throw new Error("Record not found");

    const record = await prisma.user.delete({ where: { id } });
    return { id: record.id, message: "Record deleted succesfully" };
  }

  //#endregion
}
