import { Migration } from '@mikro-orm/migrations';

export class Migration20220415124843 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "post" alter column "title" type varchar(255) using ("title"::varchar(255));');
  }

  async down(): Promise<void> {
    this.addSql('alter table "post" alter column "title" type timestamptz using ("title"::timestamptz);');
  }

}
