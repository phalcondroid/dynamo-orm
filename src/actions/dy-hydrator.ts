export class DyHydrator {
  public static hydrate<Table>(table: Table, data: Object) {
    const clone = Object.create(table as Object);
    const entityMetadata = Reflect.getMetadata('__meta__', table);
    for (const key in data) {
      const item = data[key];
      switch (Object.keys(item)[0]) {
        case 'S':
          clone[key] = item['S'];
        break;
        case 'N':
          clone[key] = Number(item['N']);
        break;
        case 'BOOL':
          clone[key] = item['BOOL'];
        break;
        case 'M':
          clone[key] = this.hydrate(new entityMetadata[key]['struct'], item['M']);
        break;
        case 'L':
          // console.log('the mapa', item, table, );
          let list = [];
          item['L'].forEach(element => {
            list.push(this.hydrate(new entityMetadata[key]['struct'], element['M']));
          });
          clone[key] = list;
        break;
      }
    }
    return clone;
  }
}