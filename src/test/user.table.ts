import 'reflect-metadata';

import { DyString } from '../decorators/dy-string.decorator';
import { DyTable } from '../decorators/dy-table.decorator';

@DyTable()
export class User {
    @DyString
    public name: string;
}

