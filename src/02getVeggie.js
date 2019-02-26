servers = ['arugula.intranet', 'atlas01.intranet', 'contemporary.intranet',
'dreamcatcher.intranet', 'dx.intranet', 'eggplant.intranet', 'finding.intranet',
'ghidorah01.intranet', 'ginger.intranet', 'growth.intranet', 'honeysuckle.intranet',
'intl.intranet', 'kaiju.intranet', 'leek.intranet', 'logistics01.intranet',
'logistics02.intranet', 'logistics03.intranet', 'mcperson.intranet', 'mobileqa.intranet',
'money.intranet', 'multisku.intranet', 'potato.intranet', 'retention.intranet',
'squash.intranet', 'stage-aws.intranet', 'thiswillchargeyou.intranet', 'trade.intranet',
'wasabi.intranet', 'yam.intranet', 'zzzzzz.intranet'];
names = ['Arugula', 'Atlas01', 'Contemporary', 'Dreamcatcher', 'DX',
'Eggplant', 'Finding', 'Ghidorah01', 'Ginger', 'Growth', 'Honeysuckle', 'INTL',
'Kaiju', 'Leek', 'Logistics01', 'Logistics02', 'Logistics03', 'McPerson',
'MobileQA', 'Money', 'Multisku', 'Potato', 'Retention', 'Squash', 'Stage-AWS',
'This Will Charge You', 'Trade', 'Wasabi', 'Yam', 'ZZZZZZ'];
pics = ['arugula', 'atlas01', 'contemporary', 'dreamcatcher', 'dx',
'eggplant', 'finding', 'ghidorah01', 'ginger', 'growth', 'honeysuckle', 'intl',
'kaiju', 'leek', 'logistics01', 'logistics02', 'logistics03', 'mcperson', 'mobileqa',
'money', 'multisku', 'potato', 'retention', 'squash', 'stage-aws', 'thiswillchargeyou',
'trade', 'wasabi', 'yam', 'zzzzzz'];

function choices(servers, names, pics) {
    let serverString = "";
    for (var choice = 0; choice < servers.length; choice++) {
      serverString += `<div class="server-choice"><img src="images/${pics[choice]}.jpg"/><div class="sc-text">${names[choice]}</div></div>`;
    };
    document.write(serverString);
};

choices(servers, names, pics);
