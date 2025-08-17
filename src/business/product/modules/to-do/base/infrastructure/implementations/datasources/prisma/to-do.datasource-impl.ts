import prisma from "@/lib/prisma";

//* Contracts
import { ToDoDatasource } from "../../../../domain/contracts/to-do.datasource";

//* Interfaces
import {
  FindAllToDos,
  ToDo,
  CreateToDos,
  UpdateToDos,
  RemoveToDos,
  GetAllToDos,
} from "../../../../domain/interfaces/to-do.interfaces";

//* Dtos
import { CreateToDoDto, UpdateToDoDto } from "./validations.dto";

export class ToDoPrismaDatasourceImpl implements ToDoDatasource {
  //#region --------------------------------- Methods ---------------------------------

  async findAll(params?: GetAllToDos): Promise<FindAllToDos> {
    let take = params?.take;
    let skip = params?.skip;

    const [data, total] = await prisma.$transaction([
      prisma.toDo.findMany({ take, skip }),
      prisma.toDo.count(),
    ]);

    return { data, total };
  }

  async findOne(field: keyof ToDo, value: string): Promise<ToDo> {
    const record = await prisma.toDo.findFirst({ where: { [field]: value } });

    if (!record) throw new Error("Record not found");

    return record;
  }

  async create(data: CreateToDos): Promise<ToDo> {
    const body = await CreateToDoDto.validate(data);

    if (!body) throw new Error("Body is required");

    const record = await prisma.toDo.create({ data: body });
    return record;
  }

  async update(id: string, data: UpdateToDos): Promise<ToDo> {
    const recordExist = await prisma.toDo.findFirst({ where: { id } });
    const body = await UpdateToDoDto.validate(data);

    if (!recordExist) throw new Error("Record not found");

    const record = await prisma.toDo.update({
      where: { id },
      data: body,
    });

    return record;
  }

  async remove(id: string): Promise<RemoveToDos> {
    const recordExist = await prisma.toDo.findFirst({ where: { id } });

    if (!recordExist) throw new Error("Record not found");

    const record = await prisma.toDo.delete({ where: { id } });
    return { id: record.id, message: "Record deleted succesfully" };
  }

  //#endregion
}
