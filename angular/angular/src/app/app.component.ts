import { Component, OnDestroy } from '@angular/core';
import { Subscription, from } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/** Promise 转 Observable 范例代码 */
export class AppComponent implements OnDestroy {
  ngOnDestroy(): void {
    if (this.timer) clearTimeout(this.timer)
    this.subscription?.unsubscribe()
  }
  index = 0 
  subscription?: Subscription
  timer:any
  /** 获取Promise 模拟调用后台 */
  getPromise() {
    return new Promise((resolve) => {
      this.timer = setTimeout(() => {
        clearTimeout(this.timer)
        ++this.index
        resolve(this.index)
      }, 1000)
    })
  }
  /** 将 Promise 转成 Observable，基于下面的 promise() 方法 */
  rxjs() {
    if (this.subscription) this.subscription.unsubscribe()
    this.subscription = from(this.getPromise()).subscribe(res => {
      console.log('这是rxjs打印的res')
      console.log(res)
    })
  }
  /** 原 Promise 方法 */
  promise() {
    this.getPromise().then(res => {
      console.log('这是promise打印的res')
      console.log(res)
    })
  }
}
