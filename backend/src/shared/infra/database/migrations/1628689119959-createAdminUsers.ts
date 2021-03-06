import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class createAdminUsers1628689119959 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table({
				name: 'admin_users',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
					},
					{
						name: 'name',
						type: 'varchar'
					},
					{
						name: 'email',
						type: 'varchar',
						isUnique: true
					},
					{
						name: 'password',
						type: 'varchar'
					},
					{
						name: 'created_at',
						type: 'timestamp',
						default: 'now()'
					}
				]
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('admin_users');
	}
}
