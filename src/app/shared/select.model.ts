export class SelectItem {
  public label: string;
  public value: string | number | boolean;
  public children: Array<SelectItem>;
  public parent: SelectItem;

  public constructor(data: any) {
    if (typeof data === 'string') {
      this.label = this.value = data;
    } else if (typeof data === 'number' || typeof data === 'boolean') {
      this.label = JSON.stringify(data);
      this.value = data;
    } else if (typeof data === 'object') {
      this.label = data.label;
      this.value = data.value || data.label;
      if (data.children) {
        this.children = data.children.map(child => {
          const itemChild: SelectItem = new SelectItem(child);
          itemChild.parent = this;
          return itemChild;
        });
      }
    }
  }
}
