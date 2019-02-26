servers = ['apricot.intranet', 'banana.intranet', 'blackberry.intranet',
'clementine.intranet', 'grape.intranet', 'guava.intranet', 'kiwi.intranet',
'lemon.intranet', 'lime.intranet', 'mango.intranet', 'orange.intranet',
'papaya.intranet', 'pear.intranet', 'pigface.intranet', 'plum.intranet',
'pumpkin.intranet', 'strawberry.intranet', 'training.intranet'];
names = ['Apricot', 'Banana', 'Blackberry', 'Clementine', 'Grape',
'Guava', 'Kiwi', 'Lemon', 'Lime', 'Mango', 'Orange', 'Papaya', 'Pear',
'Pigface', 'Plum', 'Pumpkin', 'Strawberry', 'Training'];
pics = ['apricot', 'banana', 'blackberry', 'clementine', 'grape',
'guava', 'kiwi', 'lemon', 'lime', 'mango', 'orange', 'papaya', 'pear', 'pigface',
'plum', 'pumpkin', 'strawberry', 'training'];

function choices(servers, names, pics) {
    let serverString = "";
    for (var choice = 0; choice < servers.length; choice++) {
      serverString += `<div class="server-choice"><img src="images/${pics[choice]}.jpg"/><div class="sc-text">${names[choice]}</div></div>`;
    };
    document.write(serverString);
};

choices(servers, names, pics);
