import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateShareholders1630100400754 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(new Table({
        name: "shareholders",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true
          },
          {
            name: "name",
            type: "varchar"
          },
          {
            name: "email",
            type: "varchar"
          },
          {
            name: "cpf",
            type: "varchar",
            isUnique: true
          },
          {
            name: "birthdate",
            type: "timestamp"
          },
          {
            name: "salary",
            type: "decimal",
            precision: 10,
            scale: 2,
          },
           {
            name: "created_at",
            type: "timestamp",
            default: "now()"
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()"
          },
        ]

      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable("shareholders")
    }
  }
