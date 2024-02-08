import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigrations1707367570304 implements MigrationInterface {
    name = 'MyMigrations1707367570304'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "reply" ("id" SERIAL NOT NULL, "content" character varying NOT NULL, "file_reply" character varying, "created_at" character varying NOT NULL, "userId" integer, "threadId" integer, CONSTRAINT "PK_94fa9017051b40a71e000a2aff9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "follow " ("id" SERIAL NOT NULL, "followerId" integer, "followedId" integer, CONSTRAINT "PK_b87326cb8a5767014089732a54e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "user_name" character varying NOT NULL, "full_name" character varying NOT NULL, "profile_picture" character varying NOT NULL, "image_cover" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "description" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "like " ("id" SERIAL NOT NULL, "threadId" integer, CONSTRAINT "PK_986aaa98998cbae1abadbd8eb8b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "thread" ("id" SERIAL NOT NULL, "content" character varying NOT NULL, "image_thread" character varying, "created_at" character varying NOT NULL, "userId" integer, CONSTRAINT "PK_cabc0f3f27d7b1c70cf64623e02" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "reply" ADD CONSTRAINT "FK_e9886d6d04a19413a2f0aac5d7b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "reply" ADD CONSTRAINT "FK_9b7de6888ce703f13e4bbfe13b7" FOREIGN KEY ("threadId") REFERENCES "thread"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "follow " ADD CONSTRAINT "FK_72b49ed180916bfb01fa796e76d" FOREIGN KEY ("followerId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "follow " ADD CONSTRAINT "FK_09fc2a6391172f95aaa07ae661f" FOREIGN KEY ("followedId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "like " ADD CONSTRAINT "FK_b2d9ccd70c127df293b29c5a3d3" FOREIGN KEY ("threadId") REFERENCES "thread"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "thread" ADD CONSTRAINT "FK_57782d1d6ab602aa9ff43cf30a2" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "thread" DROP CONSTRAINT "FK_57782d1d6ab602aa9ff43cf30a2"`);
        await queryRunner.query(`ALTER TABLE "like " DROP CONSTRAINT "FK_b2d9ccd70c127df293b29c5a3d3"`);
        await queryRunner.query(`ALTER TABLE "follow " DROP CONSTRAINT "FK_09fc2a6391172f95aaa07ae661f"`);
        await queryRunner.query(`ALTER TABLE "follow " DROP CONSTRAINT "FK_72b49ed180916bfb01fa796e76d"`);
        await queryRunner.query(`ALTER TABLE "reply" DROP CONSTRAINT "FK_9b7de6888ce703f13e4bbfe13b7"`);
        await queryRunner.query(`ALTER TABLE "reply" DROP CONSTRAINT "FK_e9886d6d04a19413a2f0aac5d7b"`);
        await queryRunner.query(`DROP TABLE "thread"`);
        await queryRunner.query(`DROP TABLE "like "`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "follow "`);
        await queryRunner.query(`DROP TABLE "reply"`);
    }

}
