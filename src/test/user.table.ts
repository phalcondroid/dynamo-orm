import { DyIndex } from '../decorators/dy-index.decorator';
import 'reflect-metadata';
import { DyString } from '../decorators/dy-string.decorator';
import { DyTable } from '../decorators/dy-table.decorator';
import { DyDocument } from '../decorators/dy-document.decorator';
import { DyMap } from '../decorators/dy-map.decorator';
import { DyNumber } from '../decorators/dy-number.decorator';
import { DyBoolean } from '../decorators/dy-boolean.decorator';
import { DyCollection } from '../decorators/dy-collection.decorator';

@DyDocument({
    tableName: 'no_doc'
})
export class User {
    @DyNumber()
    public static identify: number;

    @DyString()
    public static userName: string;

    @DyBoolean()
    public static exist: boolean;
}

@DyTable({
    tableName: 'client_table'
})
export class Client {
    @DyIndex()
    public static clientId: string;

    @DyString()
    public static clientName: string;

    @DyMap({
        reference: User
    })
    public static user: User;

    @DyCollection({
        reference: User
    })
    public static userList: User[];
}
