import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigrations1708182924862 implements MigrationInterface {
    name = 'MyMigrations1708182924862'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "like " ("id" SERIAL NOT NULL, "user_id" integer, "thread_id" integer, CONSTRAINT "PK_986aaa98998cbae1abadbd8eb8b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "reply" ("id" SERIAL NOT NULL, "content" character varying NOT NULL, "file_reply" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" integer, "thread_id" integer, CONSTRAINT "PK_94fa9017051b40a71e000a2aff9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "full_name" character varying NOT NULL, "user_name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "profile_picture" character varying, "image_cover" character varying, "bio" character varying, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "thread" ("id" SERIAL NOT NULL, "content" character varying, "image_thread" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_cabc0f3f27d7b1c70cf64623e02" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "follower" ("follower" integer NOT NULL, "following" integer NOT NULL, CONSTRAINT "PK_ee05a5a2c540df1d36b5b668b1d" PRIMARY KEY ("follower", "following"))`);
        await queryRunner.query(`CREATE INDEX "IDX_75bc389d7826d300a846c4f2b9" ON "follower" ("follower") `);
        await queryRunner.query(`CREATE INDEX "IDX_169853d8f632967118d08a18a1" ON "follower" ("following") `);
        await queryRunner.query(`ALTER TABLE "like " ADD CONSTRAINT "FK_9c0726b0335017d7b06a1a02d20" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "like " ADD CONSTRAINT "FK_79c1c7eea83c37e04c6239b9b23" FOREIGN KEY ("thread_id") REFERENCES "thread"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "reply" ADD CONSTRAINT "FK_ff320a60506a27ed687ed8e99b9" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "reply" ADD CONSTRAINT "FK_9de109acf98f8f152881bcb6853" FOREIGN KEY ("thread_id") REFERENCES "thread"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "thread" ADD CONSTRAINT "FK_57782d1d6ab602aa9ff43cf30a2" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "follower" ADD CONSTRAINT "FK_75bc389d7826d300a846c4f2b9f" FOREIGN KEY ("follower") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "follower" ADD CONSTRAINT "FK_169853d8f632967118d08a18a1c" FOREIGN KEY ("following") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "follower" DROP CONSTRAINT "FK_169853d8f632967118d08a18a1c"`);
        await queryRunner.query(`ALTER TABLE "follower" DROP CONSTRAINT "FK_75bc389d7826d300a846c4f2b9f"`);
        await queryRunner.query(`ALTER TABLE "thread" DROP CONSTRAINT "FK_57782d1d6ab602aa9ff43cf30a2"`);
        await queryRunner.query(`ALTER TABLE "reply" DROP CONSTRAINT "FK_9de109acf98f8f152881bcb6853"`);
        await queryRunner.query(`ALTER TABLE "reply" DROP CONSTRAINT "FK_ff320a60506a27ed687ed8e99b9"`);
        await queryRunner.query(`ALTER TABLE "like " DROP CONSTRAINT "FK_79c1c7eea83c37e04c6239b9b23"`);
        await queryRunner.query(`ALTER TABLE "like " DROP CONSTRAINT "FK_9c0726b0335017d7b06a1a02d20"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_169853d8f632967118d08a18a1"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_75bc389d7826d300a846c4f2b9"`);
        await queryRunner.query(`DROP TABLE "follower"`);
        await queryRunner.query(`DROP TABLE "thread"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "reply"`);
        await queryRunner.query(`DROP TABLE "like "`);
    }

}
