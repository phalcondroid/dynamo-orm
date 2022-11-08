import 'reflect-metadata';

export const DyTable = (table?: string) => {
    return function <T>(target: Function) {
        let tableName = target.name;
        if (table !== '' && table !== null && typeof table !== 'undefined') {
            tableName = table;
        }
        Reflect.defineMetadata(
            `${target.name}_table_name`,
            {
                'table_name': tableName
            },
            target
        );
    };
}