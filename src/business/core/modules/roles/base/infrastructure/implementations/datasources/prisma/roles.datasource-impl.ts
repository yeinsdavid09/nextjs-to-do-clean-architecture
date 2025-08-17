import prisma from "@/lib/prisma";

//* Contracts
import { RolesDatasource } from "../../../../domain/contracts/roles.datasource";

//* Interfaces
import {
  FindAllRoles,
  Roles,
  CreateRoles,
  UpdateRoles,
  RemoveRoles,
  GetAllRoles,
} from "../../../../domain/interfaces/roles.interfaces";

//* Dtos
import { CreateRolesDto, UpdateRolesDto } from "./validations.dto";

export class RolesPrismaDatasourceImpl implements RolesDatasource {
  //#region --------------------------------- Methods ---------------------------------

  async findAll(params?: GetAllRoles): Promise<FindAllRoles> {
    let take = params?.take;
    let skip = params?.skip;

    const [data, total] = await prisma.$transaction([
      prisma.rol.findMany({ take, skip }),
      prisma.rol.count(),
    ]);

    return { data, total };
  }

  async findOne(field: keyof Roles, value: string): Promise<Roles> {
    const record = await prisma.rol.findFirst({ where: { [field]: value } });

    if (!record) throw new Error("Record not found");

    return record;
  }

  async create(data: CreateRoles): Promise<Roles> {
    const body = await CreateRolesDto.validate(data);

    if (!body) throw new Error("Body is required");

    const record = await prisma.rol.create({ data: body });
    return record;
  }

  async update(id: string, data: UpdateRoles): Promise<Roles> {
    const recordExist = await prisma.rol.findFirst({ where: { id } });
    const body = await UpdateRolesDto.validate(data);

    if (!recordExist) throw new Error("Record not found");

    const record = await prisma.rol.update({
      where: { id },
      data: body,
    });

    return record;
  }

  async remove(id: string): Promise<RemoveRoles> {
    const recordExist = await prisma.rol.findFirst({ where: { id } });

    if (!recordExist) throw new Error("Record not found");

    const record = await prisma.rol.delete({ where: { id } });
    return { id: record.id, message: "Record deleted succesfully" };
  }

  //#endregion
}
