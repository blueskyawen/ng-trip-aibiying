import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

class HelpQuestion {
  title: string;
  constructor(title: string) {
    this.title = title;
  }
}

class HelpRemmdActicle extends HelpQuestion {
  text: string;
  constructor(title: string,text: string) {
    super(title);
    this.text = text;
  }
}

@Component({
  selector: 'app-page-help',
  templateUrl: './page-help.component.html',
  styleUrls: ['./page-help.component.less']
})
export class PageHelpComponent implements OnInit {
  @Input() isDisplay = false;
  @Output() isDisplayChange = new EventEmitter<any>();
  recommdActicles: any[] = [
    new HelpRemmdActicle('如何创建爱彼迎账号?','如果您还没有爱彼迎账号，请前往airbnb.com，然后点击注册。 您可以使用电子邮件地址、Facebook账号、Google账号或Amex账号注册。 注册和创…'),
    new HelpRemmdActicle('如何重置我的密码？','我想重设密码 如果您忘记了密码或无法登录您的爱彼迎账号，请访问www.airbnbchina.cn/forgot_password。 输入与您的爱彼迎账号关联的…'),
    new HelpRemmdActicle('如果有人要求我在爱彼迎站外付款，我该怎么做？','不要给他们汇钱，并告知我们。爱彼迎绝不会要求您在站外或通过电子邮件或第三方预订中介付款。 有时候，您可能需要向房东支付地方税费，但这些费用应当只通过爱彼迎网站进…\''),
    new HelpRemmdActicle('为什么应该直接通过爱彼迎付款和交流？','通过爱彼迎进行交流和交易能够确保您受到我们的服务条款、支付服务条款、取消政策、退款政策、房东保障金计划、房东保障险计划及其他保障措施的保护，此外还能让您更方便地…'),
    new HelpRemmdActicle('什么是爱彼迎取消政策？','爱彼迎允许房东从三种标准的取消政策（灵活、中等、严格）中进行选择。我们会强制执行这些取消政策，以保护房东和房客。 长期住宿取消政策自动适用于所有28晚或更长时间…')
  ];
  helpItems: any[] = [
    {
      head: '预订申请',
      items: [
        new HelpQuestion('我可以替好友或家人预订房源吗？'),
        new HelpQuestion('房东可以有多少时间回复我的预订申请？'),
        new HelpQuestion('预订房源前可以看房吗？'),
        new HelpQuestion('如何提交预订申请？'),
        new HelpQuestion('如果我的预订申请被拒绝或过期，会发生什么情况？'),
        new HelpQuestion('我什么时候会被收取预订的费用？'),
        new HelpQuestion('在未得到房东回复之前可以订房吗？'),
        new HelpQuestion('房客该如何查看预订状态？')
      ],
      isExpend: false
    },
    {
      head: '联系房东',
      items: [
        new HelpQuestion('预订房源前可以看房吗？'),
        new HelpQuestion('如何查看和发送消息？'),
        new HelpQuestion('房东可以要求房客签署合同吗？'),
        new HelpQuestion('如何在爱彼迎上预订房源？'),
        new HelpQuestion('在未得到房东回复之前可以订房吗？'),
        new HelpQuestion('“超赞房东”是什么？'),
        new HelpQuestion('预订之前如何联系房东？'),
        new HelpQuestion('各种预订状态的含义分别是什么？')
      ],
      isExpend: false
    },
    {
      head: '价格与费用',
      items: [
        new HelpQuestion('预订的价格是如何计算的？'),
        new HelpQuestion('我可以用任何货币付款吗？'),
        new HelpQuestion('哪里可以找到旅程入住信息？'),
        new HelpQuestion('如何为长期住宿预订支付房费？'),
        new HelpQuestion('我什么时候会被收取预订的费用？'),
        new HelpQuestion('如果我的预订申请没有被房东接受，我需要支付费用吗？'),
        new HelpQuestion('爱彼迎服务费是什么？')
      ],
      isExpend: false
    }
  ];
  viewQuestion: string;
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
