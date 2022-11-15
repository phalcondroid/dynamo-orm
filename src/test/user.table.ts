import { DyIndex } from '../decorators/dy-index.decorator';
import 'reflect-metadata';
import { DyString } from '../decorators/dy-string.decorator';
import { DyTable } from '../decorators/dy-table.decorator';
import { DyDocument } from '../decorators/dy-document.decorator';
import { DyMap } from '../decorators/dy-map.decorator';
import { DyNumber } from '../decorators/dy-number.decorator';
import { DyBoolean } from '../decorators/dy-boolean.decorator';
import { DyCollection } from '../decorators/dy-collection.decorator';

@DyDocument()
export class User {
    @DyNumber()
    public identify: number;

    @DyString()
    public userName: string;

    @DyBoolean()
    public exist: boolean;
}

@DyTable()
export class Client {
    @DyIndex()
    public clientId: string;

    @DyString()
    public clientName: string;

    @DyNumber()
    public phone: number;
    
    @DyBoolean()
    public active: boolean;

    @DyMap({
        reference: User
    })
    public user: User;

    @DyCollection({
        reference: User
    })
    public userList: User[];
}
