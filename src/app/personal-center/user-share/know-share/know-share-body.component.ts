import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-know-share-body',
  templateUrl: './know-share-body.component.html',
  styleUrls: ['./know-share-body.component.less']
})
export class KnowShareBodyComponent implements OnInit {
  questions: any[] = [
    {
      title: '谁可以成为爱彼迎房东？',
      text: '成为爱彼迎房东在大多数地区都很简单，而且创建房源一直以来都是免费的。爱彼迎的房东们分享了各' +
      '式各样的房源，有整套公寓和房屋、独立房间、树屋、城堡等等……我们把对房东的期待写在了爱彼迎社区标准当中，其中涉及安' +
      '全标准、房东责任、待客之道等核心概念，能够帮助房东获得更多房客好评。'
    },
    {
      title: '我会得到怎样的财产损失保护？',
      text: '如果发生受保障财产遭受房客破坏的罕见情况，且损失超出了押金金额，或者房东没有设置押金，爱彼' +
      '迎房东保障金计划将为房东提供高达100万美元的保障。 房东保障金计划的承保范围不包括现金和证券、收藏品、稀有艺术品、珠' +
      '宝、宠物或个人责任。 我们建议房东出租时锁好或转移贵重物品。 日久损耗对财产造成的损失或毁坏也不在此计划保障范围内。 进' +
      '一步了解房东保障金计划http://airbnb.com/guarantee'
    },
    {
      title: '房客预订之前需要满足哪些条件？',
      text: '在用户踏上爱彼迎之旅前，我们会要求他们提供一些信息。房客需要填写全部信息才能够发送预订请求。这些信息中包' +
      '含了房客的联系方式，同时也会让您对房客有一定的了解。爱彼迎要求房客提供全名、电子邮件地址、验证过的手机号码、介绍信' +
      '息、付款信息，同时需要同意我们的房屋守则。我们推荐房客提供个人头像，但并不强制要求。您也可以要求房客在预订您的房源前' +
      '提供身份认证信息。'
    },
    {
      title: '我如何选择房源价格？',
      text: '房源价格完全掌握在您的手中。您可以参照所在城市或街区的同类房源，调研房源的市场价格，以便最终确定价格。额外' +
      '费用•清洁费：您可以直接把清洁费算在每晚价格内，也可以在定价设置中添加清洁费。• 其他费用：如需在房价之外收取额外' +
      '费用（比如延迟入住费或宠物费），房客必须在预订前知晓这些潜在费用，之后，您可以向调解中心提出请求，安全地收取这些额' +
      '外费用。'
    },
    {
      title: '发布空间如何收费？',
      text: '在爱彼迎注册并发布房源完全免费。每笔预订爱彼迎向房东收取3%的服务费，用于支付爱彼迎平台的运行费用。（中国' +
      '大陆地区房源的房东服务费为10%，房客服务费为0。）'
    },
    {
      title: '爱彼迎如何帮助我设定价格？',
      text: '爱彼迎的智能定价功能可以将房源价格设置为随市场对类似房源的需求变化而自动调整。房源价格始终由您决定，智能' +
      '定价功能会受您所选择的其他价格设置影响，您也可以随时调整每晚价格。智能定价功能对价格的调整基于您房源的类型和位' +
      '置、季节、需求情况以及其他因素（如您所在地区的活动）。'
    },
  ];
  curViewQuestion: any;
  isViewQuestin: boolean = false;
  moreQuestions: any[] = [
    {
      name: '出租设置',
      title: '如何开始出租',
      src: 'https://z1.muscache.cn/pictures/8f287639-0b26-446d-8891-5b0517751da0.jpg',
      callBack: () => {window.open('https://www.airbnb.cn/b/setup','_blank');}
    },
    {
      name: '安全事项',
      title: '爱彼迎如何保护房东',
      src: 'https://z1.muscache.cn/pictures/f5c99953-d8c0-44d3-b8cd-6aeafb0c5903.jpg',
      callBack: () => {window.open('https://www.airbnb.cn/b/safety','_blank');}
    },
    {
      name: '改善经济条件',
      title: '如何在爱彼迎上赚取收入',
      src: 'https://z1.muscache.cn/pictures/b5816d12-bad2-4af0-a200-3d37beade068.jpg',
      callBack: () => {window.open('https://www.airbnb.cn/b/financials','_blank');}
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  goSafety() {
    window.open('https://www.airbnb.cn/b/safety','_blank');
  }

  goHowShare() {
    window.open('https://www.airbnb.cn/b/setup','_blank');
  }

  goHowShare2() {
    window.open('https://www.airbnb.com/b/host_testimonial_tessa','_blank');
  }

  viewQuestin(question: any) {
    this.curViewQuestion = question;
    this.isViewQuestin = true;
  }
}
