import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exper-guide',
  templateUrl: './exper-guide.component.html',
  styleUrls: ['./exper-guide.component.less']
})
export class ExperGuideComponent implements OnInit {
  questions: any[] = [
    {
      name: '我必须要出租房屋，然后才能开展体验吗？',
      text: '不需要！开展体验无需在家中或其他地方留宿参与者。'
    },
    {
      name: '我需要多长时间开展一次体验？',
      text: '多长时间开展一次体验由你决定——你可以自由选择最合适的日期和时间。请记住，只有开放了可预订日期的体验才能被搜索和看到。'
    },
    {
      name: '我需要营业执照吗？',
      text: '某些体验可能需要提供营业执照，这取决于体验中涉及的活动。请务必查阅当地法律规定，确定你的体验中可能需要的执照，特别是体验中涉及食物、酒精或交通工具时，需要格外留心。'
    },
    {
      name: '我能设置每次体验的最少参与人数吗？',
      text: '每次体验的参与人数至少为1人。'
    },
    {
      name: '我需要为参与者购买保险吗？',
      text: '体验保障险的承保范围包括了体验中的大部分活动，但飞行、驾驶这一类活动不在保险范围内。如果体验涉及这些活动，你可能需要自行购买保险。'
    },
    {
      name: '我可以和别人一起组织体验吗？',
      text: '如果体验由你想和其他人共同开展，请在体验页面注明他们的名字，让参与者知道他们将和谁同行。所有体验组织者均需在爱彼迎平台上验证个人真实身份。'
    }
  ];
  questionItems: any[] = [];
  operTitle: string = '显示更多';
  isExpend: boolean = false;
  constructor() { }

  ngOnInit() {
    this.questionItems = this.questions.slice(0, 3);
  }

  goAddExper() {
    window.open('https://www.airbnb.cn/host/experiences?step=0', '_blank');
  }

  viewMore() {
    if(this.isExpend) {
      this.questionItems = this.questions.slice(0, 3);
      this.operTitle = '显示更多';
      this.isExpend = false;
    } else {
      this.questionItems = this.questions;
      this.operTitle = '收起';
      this.isExpend = true;
    }
  }

}
