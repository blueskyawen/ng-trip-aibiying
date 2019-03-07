import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-help',
  templateUrl: './page-help.component.html',
  styleUrls: ['./page-help.component.less']
})
export class PageHelpComponent implements OnInit {
  @Input() isDisplay = false;
  @Output() isDisplayChange = new EventEmitter<any>();
  recommdActicles: any[] = [
    {head:'如何创建爱彼迎账号?',
     text:'如果您还没有爱彼迎账号，请前往airbnb.com，然后点击注册。 您可以使用电子邮件地址、Facebook账号、Google账号或Amex账号注册。 注册和创…',
     action: () => {console.log('action1');}
    },
    {head:'如何重置我的密码？',
      text:'我想重设密码 如果您忘记了密码或无法登录您的爱彼迎账号，请访问www.airbnbchina.cn/forgot_password。 输入与您的爱彼迎账号关联的…',
      action: () => {console.log('action2');}
    },
    {head:'如果有人要求我在爱彼迎站外付款，我该怎么做？',
      text:'不要给他们汇钱，并告知我们。爱彼迎绝不会要求您在站外或通过电子邮件或第三方预订中介付款。 有时候，您可能需要向房东支付地方税费，但这些费用应当只通过爱彼迎网站进…',
      action: () => {console.log('action3');}
    },
    {head:'为什么应该直接通过爱彼迎付款和交流？',
      text:'通过爱彼迎进行交流和交易能够确保您受到我们的服务条款、支付服务条款、取消政策、退款政策、房东保障金计划、房东保障险计划及其他保障措施的保护，此外还能让您更方便地…',
      action: () => {console.log('action');}
    },
    {head:'什么是爱彼迎取消政策？',
      text:'爱彼迎允许房东从三种标准的取消政策（灵活、中等、严格）中进行选择。我们会强制执行这些取消政策，以保护房东和房客。 长期住宿取消政策自动适用于所有28晚或更长时间…',
      action: () => {console.log('action');}
    }
  ];
  helpItems: any[] = [
    {
      head:'预订申请',
      items:[
        {question:'我可以替好友或家人预订房源吗？',action:() => {console.log('question-action1');}},
        {question:'房东可以有多少时间回复我的预订申请？',action:() => {console.log('question-action2');}},
        {question:'预订房源前可以看房吗？',action:() => {console.log('question-action3');}},
        {question:'如何提交预订申请？',action:() => {console.log('question-action4');}},
        {question:'如果我的预订申请被拒绝或过期，会发生什么情况？',action:() => {console.log('question-action5');}},
        {question:'我什么时候会被收取预订的费用？',action:() => {console.log('question-action');}},
        {question:'在未得到房东回复之前可以订房吗？',action:() => {console.log('question-action');}},
        {question:'房客该如何查看预订状态？',action:() => {console.log('question-action');}}
      ]
    },
    {
      head:'联系房东',
      items:[
        {question:'预订房源前可以看房吗？',action:() => {console.log('question-action');}},
        {question:'如何查看和发送消息？',action:() => {console.log('question-action');}},
        {question:'房东可以要求房客签署合同吗？',action:() => {console.log('question-action');}},
        {question:'如何在爱彼迎上预订房源？',action:() => {console.log('question-action');}},
        {question:'在未得到房东回复之前可以订房吗？',action:() => {console.log('question-action');}},
        {question:'“超赞房东”是什么？',action:() => {console.log('question-action');}},
        {question:'预订之前如何联系房东？',action:() => {console.log('question-action');}},
        {question:'各种预订状态的含义分别是什么？',action:() => {console.log('question-action');}}
      ]
    },
    {
      head:'价格与费用',
      items:[
        {question:'预订的价格是如何计算的？',action:() => {console.log('question-action');}},
        {question:'我可以用任何货币付款吗？',action:() => {console.log('question-action');}},
        {question:'哪里可以找到旅程入住信息？',action:() => {console.log('question-action');}},
        {question:'如何为长期住宿预订支付房费？',action:() => {console.log('question-action');}},
        {question:'我什么时候会被收取预订的费用？',action:() => {console.log('question-action');}},
        {question:'如果我的预订申请没有被房东接受，我需要支付费用吗？',action:() => {console.log('question-action');}},
        {question:'爱彼迎服务费是什么？',action:() => {console.log('question-action');}}
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  showChange() {
    this.isDisplayChange.emit(this.isDisplay);
  }

  goHelpCenter() {
    window.open('https://www.airbnb.cn/help','_blank')
  }
}
