import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigrations1711853595367 implements MigrationInterface {
    name = 'MyMigrations1711853595367'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "like " ("id" SERIAL NOT NULL, "user_id" integer, "thread_id" integer, CONSTRAINT "PK_986aaa98998cbae1abadbd8eb8b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reply" ("id" SERIAL NOT NULL, "content" character varying NOT NULL, "file_reply" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" integer, "thread_id" integer, CONSTRAINT "PK_94fa9017051b40a71e000a2aff9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "follows " ("id" SERIAL NOT NULL, "followerId" integer, "followingId" integer, CONSTRAINT "PK_e2d4268230a367a1d2ea5d4c2c7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "full_name" character varying NOT NULL, "user_name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "profile_picture" character varying, "image_cover" character varying, "bio" character varying, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "thread" ("id" SERIAL NOT NULL, "content" character varying, "image_thread" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_cabc0f3f27d7b1c70cf64623e02" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "like " ADD CONSTRAINT "FK_9c0726b0335017d7b06a1a02d20" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "like " ADD CONSTRAINT "FK_79c1c7eea83c37e04c6239b9b23" FOREIGN KEY ("thread_id") REFERENCES "thread"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "reply" ADD CONSTRAINT "FK_ff320a60506a27ed687ed8e99b9" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "reply" ADD CONSTRAINT "FK_9de109acf98f8f152881bcb6853" FOREIGN KEY ("thread_id") REFERENCES "thread"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "follows " ADD CONSTRAINT "FK_4bf4568747c847ac724112620bb" FOREIGN KEY ("followerId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "follows " ADD CONSTRAINT "FK_ca3c2d4c73d8a6b7458fc3e1338" FOREIGN KEY ("followingId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "thread" ADD CONSTRAINT "FK_57782d1d6ab602aa9ff43cf30a2" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "thread" DROP CONSTRAINT "FK_57782d1d6ab602aa9ff43cf30a2"`);
        await queryRunner.query(`ALTER TABLE "follows " DROP CONSTRAINT "FK_ca3c2d4c73d8a6b7458fc3e1338"`);
        await queryRunner.query(`ALTER TABLE "follows " DROP CONSTRAINT "FK_4bf4568747c847ac724112620bb"`);
        await queryRunner.query(`ALTER TABLE "reply" DROP CONSTRAINT "FK_9de109acf98f8f152881bcb6853"`);
        await queryRunner.query(`ALTER TABLE "reply" DROP CONSTRAINT "FK_ff320a60506a27ed687ed8e99b9"`);
        await queryRunner.query(`ALTER TABLE "like " DROP CONSTRAINT "FK_79c1c7eea83c37e04c6239b9b23"`);
        await queryRunner.query(`ALTER TABLE "like " DROP CONSTRAINT "FK_9c0726b0335017d7b06a1a02d20"`);
        await queryRunner.query(`DROP TABLE "thread"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "follows "`);
        await queryRunner.query(`DROP TABLE "reply"`);
        await queryRunner.query(`DROP TABLE "like "`);
    }

}
