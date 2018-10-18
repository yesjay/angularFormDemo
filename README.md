Template Driven Forms Features

1.Easy to use
2.Suitable for simple scenarios and fails for complex scenarios
3.Similar to AngularJS
4.Two way data binding(using [(NgModel)] syntax)
5.Minimal component code
6.Automatic track of the form and its data(handled by Angular)
7.Unit testing is another challenge

Reactive Forms Features

1.More flexible, but needs a lot of practice
2.Handles any complex scenarios
3.No data binding is done (immutable data model preferred by most developers)
4.More component code and less HTML markup
5.Reactive transformations can be made possible such as
  -Handling a event based on a debounce time
  -Handling events when the components are distinct until changed
  -Adding elements dynamically
6.Easier unit testing


模板驅動表格特色：
1.方便使用
2.適用於簡單環境,複雜環境使用上較為複雜(ex:驗證標籤越來越多,或是交叉驗證)
3.操作類似AngularJS
4.應用雙向綁定（使用[(ngModel)]的語法）
5.可精簡component中代碼
6.自動追蹤表單及其數據（由angular處理)
7.單元測試會是另一項挑戰（驗證標籤的部份）

反應式表單特色：
1.更靈活,但需要大量練習
2.可處理任何複雜的環境
3.沒有數據綁定（大多數開發人員傾向使用不可變數據模型）
4.更多的component代碼,但html部份較為精簡
5.反應式表單的應用
	-可以利用debounce time來處理事件
	-可動態添加元素（見https://stackblitz.com/angular/ayxplvqnpnq）
6.單元測試中較為簡單

補充：
1.反應式表單要讓fromControl中帶有error屬性兩個方法：
  -標籤後放入required
  -在formGroup的變數中設定
2.透過FormBuilder.group({})可建立多層級
  可以利用this.dataForm.get('physicalConditions.weight').value取值
  封裝成formGroup、formArray、formControl的物件都能夠透過.value取值
