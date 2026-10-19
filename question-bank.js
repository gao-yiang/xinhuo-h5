/* 薪火接力题库：55 个历史主题、8 位人物，各有四种问法，共 252 题。
   事实依据和各主题出处见 source-notes.md；本文件可在本地直接加载。 */
(function (root) {
  'use strict';
  const sources = [
    {id:'chronology',title:'中国共产党一百年大事记（1921年7月－2021年6月）',org:'中共中央党史和文献研究院／共产党员网',url:'https://www.12371.cn/2021/06/28/ARTI1624828749818652.shtml'},
    {id:'an',title:'百年瞬间｜安源路矿工人大罢工',org:'共产党员网',url:'https://www.12371.cn/2021/05/10/VIDE1620607080225611.shtml'},
    {id:'wyb',title:'党史百年·天天读｜12月17日：瓦窑堡会议',org:'共产党员网',url:'https://www.12371.cn/2021/12/13/ARTI1639382897159309.shtml'},
    {id:'longmarch',title:'百年瞬间｜红军三大主力胜利会师',org:'共产党员网',url:'https://www.12371.cn/2021/10/09/VIDE1633740241787329.shtml'},
    {id:'seventh',title:'中国共产党第七次全国代表大会',org:'中央党史和文献研究院／共产党员网',url:'https://www.12371.cn/special/lcddh/ddh7/'},
    {id:'chongqing',title:'百年瞬间｜重庆谈判与《双十协定》',org:'共产党员网',url:'https://www.12371.cn/2021/10/10/VIDE1633831681633972.shtml'},
    {id:'constitution',title:'百年瞬间｜新中国第一部宪法的诞生',org:'共产党员网',url:'https://www.12371.cn/2021/03/04/VIDE1614817202237706.shtml'},
    {id:'eighth',title:'中国共产党第八次全国代表大会',org:'中央党史和文献研究院／共产党员网',url:'https://www.12371.cn/special/lcddh/ddh8/'},
    {id:'twelfth',title:'百个瞬间说百年｜1982，“建设有中国特色的社会主义”',org:'共产党员网',url:'https://www.12371.cn/2021/10/28/ARTI1635387787522269.shtml'},
    {id:'south',title:'百个瞬间说百年｜1992，邓小平南方谈话',org:'共产党员网',url:'https://www.12371.cn/2021/12/08/ARTI1638969388582281.shtml'},
    {id:'fourteenth',title:'党的十四大：确定建立社会主义市场经济体制',org:'共产党员网',url:'https://www.12371.cn/2022/08/12/ARTI1660261371339498.shtml'},
    {id:'centenary',title:'全面建成小康社会大事记',org:'中共中央党史和文献研究院／共产党员网',url:'https://www.12371.cn/2021/07/27/ARTI1627394368678580.shtml'},
    {id:'nineteenth',title:'中国共产党第十九次全国代表大会报告',org:'共产党员网',url:'https://www.12371.cn/2017/10/27/ARTI1509103656574313.shtml'},
    {id:'twentieth',title:'中国共产党第二十次全国代表大会',org:'共产党员网',url:'https://www.12371.cn/2022/11/23/VIDE1669189440339331.shtml'},
    {id:'thirdplenum',title:'党的二十届三中全会《决定》',org:'北京市地方金融管理局',url:'https://jrj.beijing.gov.cn/ztzl/jrdj/llxx/202407/t20240725_3759479.html'},
    {id:'fourthplenum',title:'中国共产党第二十届中央委员会第四次全体会议公报',org:'中华人民共和国外交部',url:'https://www.fmprc.gov.cn/ziliao_674904/1179_674909/202510/t20251023_11739370.shtml'},
    {id:'anniversary105',title:'在庆祝中国共产党成立105周年大会上的讲话',org:'共产党员网／新华社',url:'https://www.12371.cn/2026/07/01/ARTI1782887883715499.shtml'},
    {id:'lidazhao',title:'中国共产主义运动先驱——李大钊',org:'共产党员网',url:'https://news.12371.cn/2018/05/25/ARTI1527228513472668.shtml'},
    {id:'chenduxiu',title:'陈独秀：“德”、“赛”救中国',org:'中国共产党新闻网／人民网',url:'https://cpc.people.com.cn/GB/34136/2543709.html'},
    {id:'maozedong',title:'毛泽东生平年表（1893—1925年）',org:'共产党员网',url:'https://news.12371.cn/2013/12/20/ARTI1387526444616337.shtml'},
    {id:'zhude',title:'朱德谈学习党史',org:'共产党员网',url:'https://www.12371.cn/2021/02/26/ARTI1614342910957197.shtml'},
    {id:'zhouenlai',title:'周恩来生平',org:'中华人民共和国外交部',url:'https://www.fmprc.gov.cn/web/ziliao_674904/wjrw_674925/2166_674931/200805/t20080509_9880973.shtml'},
    {id:'jiaoyulu',title:'焦裕禄：心中装着百姓 一切为了人民',org:'共产党员网',url:'https://www.12371.cn/2022/08/15/ARTI1660561367742574.shtml'},
    {id:'dengxiaoping',title:'纪念邓小平诞辰110周年',org:'共产党员网',url:'https://www.12371.cn/special/dxpdc110zn/'},
    {id:'xijinping',title:'习近平同志简历',org:'共产党员网',url:'https://www.12371.cn/2017/10/25/ARTI1508930367561645.shtml'}
  ];
  // [事件, 年份, 地点, 主要内容, 重要结果或意义, 来源]
  const events = [
    ['五四运动','1919年','北京','学生在天安门前集会、游行示威','标志着新民主主义革命的伟大开端','chronology'],
    ['上海共产党早期组织成立','1920年','上海','陈独秀等发起成立共产党早期组织','成为各地共产主义者进行建党活动的联络中心','chronology'],
    ['中国共产党第一次全国代表大会开幕','1921年','上海','大会通过党的第一个纲领','宣告中国共产党正式成立','chronology'],
    ['中共一大南湖续会','1921年','浙江嘉兴南湖','最后一天的会议转移到游船上举行','完成中共一大的最后议程','chronology'],
    ['中国劳动组合书记部成立','1921年','上海','成立公开领导工人运动的机构','成为党领导工人运动的第一个公开机构','chronology'],
    ['中国共产党第二次全国代表大会','1922年','上海','第一次提出明确的反帝反封建民主革命纲领','通过党成立后的第一个党章','chronology'],
    ['安源路矿工人大罢工','1922年','江西安源','路矿工人在党组织领导下举行罢工并取得胜利','成为党独立领导并取得完全胜利的工人斗争','an'],
    ['京汉铁路工人大罢工','1923年','京汉铁路沿线','两万余名铁路工人举行总罢工','成为中国工人运动第一次高潮的顶点','chronology'],
    ['中国共产党第三次全国代表大会','1923年','广州','决定共产党员以个人身份加入国民党','推动第一次国共合作的实现','chronology'],
    ['国民党第一次全国代表大会','1924年','广州','事实上确立联俄、联共、扶助农工三大政策','标志第一次国共合作正式形成','chronology'],
    ['黄埔军校开学','1924年','广州黄埔','国共合作创办的陆军军官学校开学','为革命武装培养骨干力量','chronology'],
    ['中国共产党第四次全国代表大会','1925年','上海','提出无产阶级领导权和工农联盟问题','推动党对民主革命问题的认识取得重要进展','chronology'],
    ['五卅运动','1925年','上海','反对帝国主义暴行的群众运动迅速席卷全国','标志大革命高潮的到来','chronology'],
    ['国民革命军北伐出师','1926年','广州','国民革命军举行誓师并开始北伐','基本消灭军阀吴佩孚、孙传芳的势力','chronology'],
    ['上海工人第三次武装起义','1927年','上海','在党组织领导下起义取得胜利','随后成立上海特别市临时市政府','chronology'],
    ['中国共产党第五次全国代表大会','1927年','武汉','大会选举产生中央监察委员会','建立党的首个中央纪律检查监督机构','chronology'],
    ['南昌起义','1927年','江西南昌','打响武装反抗国民党反动派的第一枪','开启党独立领导革命战争、创建人民军队的历程','chronology'],
    ['八七会议','1927年','湖北汉口','确定土地革命和武装反抗国民党反动派的总方针','推动由大革命失败转向土地革命战争','chronology'],
    ['湘赣边界秋收起义','1927年','湘赣边界','工农革命军第一师在党组织领导下发动起义','起义部队后来进军井冈山、开始创建农村革命根据地','chronology'],
    ['三湾改编','1927年','江西永新三湾','将党的支部建在连上','从组织上确立党对军队的领导','chronology'],
    ['广州起义','1927年','广州','起义后成立广州苏维埃政府','进行在城市建立苏维埃政权的尝试','chronology'],
    ['井冈山会师','1928年','江西井冈山','朱德、陈毅率领的部队与毛泽东率领的部队会师','会师后成立工农革命军第四军','chronology'],
    ['中国共产党第六次全国代表大会','1928年','苏联莫斯科近郊','大会提出争取群众的总路线','分析中国革命现阶段仍属于资产阶级民主革命','chronology'],
    ['古田会议','1929年','福建上杭古田','通过关于纠正党内错误思想的决议','确立思想建党、政治建军的原则','chronology'],
    ['中华苏维埃第一次全国代表大会','1931年','江西瑞金','宣布成立中华苏维埃共和国临时中央政府','成为党在局部地区执政的重要尝试','chronology'],
    ['九一八事变','1931年','辽宁沈阳','日本开始大举侵占中国东北','成为中国人民抗日战争的起点','chronology'],
    ['黎平会议','1934年','贵州黎平','中央政治局决定红军改向贵州北部进军','放弃原定前往湘西北会合的计划','chronology'],
    ['遵义会议','1935年','贵州遵义','集中解决当时具有决定意义的军事和组织问题','成为党的历史上生死攸关的转折点','chronology'],
    ['瓦窑堡会议','1935年','陕西瓦窑堡','确立建立抗日民族统一战线的新策略','为调整党的抗日策略提供重要指引','wyb'],
    ['红军三大主力胜利会师','1936年','会宁、将台堡等西北地区','红一、红二、红四方面军先后实现会师','宣告历时两年的长征胜利结束','longmarch'],
    ['洛川会议','1937年','陕西洛川','通过《中国共产党抗日救国十大纲领》','标志党的全面抗战路线正式形成','chronology'],
    ['平型关大捷','1937年','山西平型关','八路军第一一五师主力取得胜利','打破了日军不可战胜的神话','chronology'],
    ['中共扩大的六届六中全会','1938年','延安','首次提出马克思主义中国化的命题','进一步统一全党思想和步调','chronology'],
    ['中共中央南方局成立','1939年','重庆','由周恩来任书记并领导南方党组织工作','广泛开展抗战时期的统一战线工作','chronology'],
    ['百团大战','1940年','华北地区','八路军总部发动大规模对日军进攻','有力打击了华北的日伪军','chronology'],
    ['延安整风运动普遍展开','1942年','延安','反对主观主义、宗派主义和党八股','推动全党改进学风、党风和文风','chronology'],
    ['延安文艺座谈会','1942年','延安','阐明革命文艺为人民服务首先是为工农兵服务','明确革命文艺工作的根本方向','chronology'],
    ['中国共产党第七次全国代表大会','1945年','延安','把毛泽东思想确立为全党指导思想并载入党章','以团结的大会、胜利的大会载入史册','seventh'],
    ['重庆谈判','1945年','重庆','毛泽东赴重庆同国民党方面进行谈判','推动和平民主运动并形成《双十协定》','chongqing'],
    ['中共七届二中全会','1949年','河北西柏坡','讨论党的工作重心由乡村转移到城市','提出谦虚谨慎、艰苦奋斗的“两个务必”','chronology'],
    ['中国人民政治协商会议第一届全体会议','1949年','北平','通过起临时宪法作用的《共同纲领》','标志中国共产党领导的多党合作和政治协商制度正式确立','chronology'],
    ['中华人民共和国开国大典','1949年','北京天安门广场','中央人民政府成立典礼隆重举行','中华人民共和国宣告成立','chronology'],
    ['第一届全国人民代表大会第一次会议','1954年','北京','制定并颁布新中国第一部宪法','为国家政治制度建设奠定重要基础','constitution'],
    ['中国共产党第八次全国代表大会','1956年','北京','分析社会主义制度基本建立后的国内主要矛盾','提出集中力量发展社会生产力的任务','eighth'],
    ['中共十一届三中全会','1978年','北京','作出工作中心转向经济建设、实行改革开放的决策','开启改革开放和社会主义现代化建设新时期','chronology'],
    ['首批经济特区设置','1980年','深圳、珠海、汕头、厦门','批准在广东、福建设置四个经济特区','成为对外开放的重要先行探索','chronology'],
    ['中国共产党第十二次全国代表大会','1982年','北京','提出“建设有中国特色的社会主义”命题','成为改革开放新时期召开的第一次党代会','twelfth'],
    ['邓小平南方谈话','1992年','武昌、深圳、珠海、上海','视察南方并就改革开放发表重要谈话','成为解放思想、实事求是的又一宣言书','south'],
    ['中国共产党第十四次全国代表大会','1992年','北京','明确经济体制改革目标是建立社会主义市场经济体制','推动社会主义制度与市场经济结合','fourteenth'],
    ['庆祝中国共产党成立100周年大会','2021年','北京天安门广场','庄严宣告在中华大地上全面建成小康社会','标志第一个百年奋斗目标已经实现','centenary'],
    ['中国共产党第十九次全国代表大会','2017年','北京','作出中国特色社会主义进入新时代的重大政治判断','把习近平新时代中国特色社会主义思想写入党章','nineteenth'],
    ['中国共产党第二十次全国代表大会','2022年','北京','对新时代新征程党和国家事业发展作出战略部署','提出以中国式现代化全面推进中华民族伟大复兴','twentieth'],
    ['中共二十届三中全会','2024年','北京','审议通过关于进一步全面深化改革、推进中国式现代化的决定','对进一步全面深化改革作出系统部署','thirdplenum'],
    ['中共二十届四中全会','2025年','北京','审议通过关于制定国民经济和社会发展第十五个五年规划的建议','提出十五五时期经济社会发展的主要目标','fourthplenum'],
    ['庆祝中国共产党成立105周年大会','2026年','北京人民大会堂','习近平发表讲话并向七一勋章获得者颁授勋章','回顾党的105年历程，号召接续奋斗','anniversary105']
  ];
  // [姓名, 生年, 籍贯, 生平简介, 关联史事, 贡献关键词, 来源]
  const people = [
    ['李大钊','1889年','河北乐亭','1889年生于河北乐亭。五四运动前后积极传播马克思主义，推动北方建党活动。1927年在北京牺牲。','北京共产党早期组织','传播马克思主义','lidazhao'],
    ['陈独秀','1879年','安徽怀宁','1879年生于安徽怀宁。1915年创办《青年杂志》，倡导新文化运动；1920年参与发起上海共产党早期组织。1942年病逝。','上海共产党早期组织成立','创办《青年杂志》','chenduxiu'],
    ['毛泽东','1893年','湖南湘潭','1893年生于湖南湘潭。1921年出席中共一大；1927年领导秋收起义，随后创建井冈山革命根据地。1949年参与领导建立新中国，1976年逝世。','湘赣边界秋收起义','创建井冈山革命根据地','maozedong'],
    ['朱德','1886年','四川仪陇','1886年生于四川仪陇。参加南昌起义后率部转战；1928年到井冈山与毛泽东率领的部队会师。1976年逝世。','井冈山会师','率部参加井冈山会师','zhude'],
    ['周恩来','1898年','江苏淮安','1898年生于江苏淮安。参与领导南昌起义，抗战期间从事统一战线工作。新中国成立后任国务院总理，1976年逝世。','南昌起义','参与领导南昌起义','zhouenlai'],
    ['焦裕禄','1922年','山东淄博','1922年生于山东淄博。1962年到河南兰考工作，带领群众治理内涝、风沙、盐碱。1964年病逝。','兰考治理三害','带领群众治理兰考三害','jiaoyulu'],
    ['邓小平','1904年','四川广安','1904年生于四川广安，是改革开放和社会主义现代化建设的总设计师。1992年南方谈话推动进一步解放思想，1997年逝世。','邓小平南方谈话','推动改革开放','dengxiaoping'],
    ['习近平','1953年','陕西富平','1953年生，陕西富平人。2012年当选中共中央总书记，2026年在庆祝中国共产党成立105周年大会上发表讲话。','庆祝中国共产党成立105周年大会','2012年当选中共中央总书记','xijinping']
  ];
  function otherValues(column, eventIndex, kind) {
    const correct = events[eventIndex][column];
    const values = [...new Set(events.map(row => row[column]))].filter(value =>
      value !== correct && (column !== 2 || (!value.includes(correct) && !correct.includes(value)))
    );
    const picked = [];
    let at = (eventIndex * 13 + kind * 17) % values.length;
    while (picked.length < 3) {
      const value = values[at % values.length];
      if (!picked.includes(value)) picked.push(value);
      at += 1;
    }
    return picked;
  }
  function makeQuestion(eventIndex, kind) {
    const [name, year, place, content, meaning, source] = events[eventIndex];
    const column = [1,0,2,4][kind];
    const answer = kind === 0 ? year : kind === 1 ? name : kind === 2 ? place : meaning;
    const options = otherValues(column, eventIndex, kind);
    const right = (eventIndex + kind) % 4;
    options.splice(right, 0, answer);
    const prompts = [
      `“${name}”发生在哪一年？`,
      `“${content}”对应哪一历史事件？`,
      `“${name}”主要发生或召开于哪里？`,
      `“${name}”具有哪项重要结果或意义？`
    ];
    const note = [`${name}发生于${year}。`,`${name}的主要内容是：${content}。`,`${name}主要发生或召开于${place}。`,`${name}的重要结果或意义是：${meaning}。`][kind];
    return {id:`E${String(eventIndex+1).padStart(2,'0')}-${kind+1}`,eventIndex,tag:`${year} · ${name}`,q:prompts[kind],a:options,right,explain:note,source};
  }
  const eventQuestions = events.flatMap((_, i) => [0,1,2,3].map(kind => makeQuestion(i, kind)));
  function personQuestion(personIndex, kind) {
    const [name,birth,place,bio,event,contribution,source] = people[personIndex];
    const columns = [1,0,2,5];
    const answer = kind===0?birth:kind===1?name:kind===2?place:contribution;
    const pool = [...new Set(people.map(row=>row[columns[kind]]))].filter(value=>value!==answer);
    const options = [];
    let at = (personIndex*3+kind*2)%pool.length;
    while(options.length<3){const value=pool[at%pool.length];if(!options.includes(value))options.push(value);at++}
    const right=(personIndex+kind)%4;options.splice(right,0,answer);
    const prompts = [`${name}出生于哪一年？`,`“${birth}出生于${place}，${contribution}”指的是哪位人物？`,`${name}的籍贯是哪里？`,`哪项是${name}的主要事迹？`];
    const notes = [`${name}生于${birth}，籍贯${place}。`,`${name}生于${birth}，籍贯${place}；相关事迹是${contribution}。`,`${name}的籍贯是${place}。`,`${name}的事迹包括：${contribution}。`];
    return {id:`P${String(personIndex+1).padStart(2,'0')}-${kind+1}`,personIndex,tag:`历史人物 · ${name}`,q:prompts[kind],a:options,right,explain:notes[kind],source};
  }
  const personQuestions = people.flatMap((_,i)=>[0,1,2,3].map(kind=>personQuestion(i,kind)));
  const questions = [...eventQuestions,...personQuestions];
  root.XINHUO_BANK = Object.freeze({sources,events,people,eventQuestions,personQuestions,questions});
})(typeof window !== 'undefined' ? window : globalThis);
