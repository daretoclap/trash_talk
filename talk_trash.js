const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

}

const phrase = ['很簡單', '很容易', '很快', '很正常']

function sample(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function talkTrash(character) {
  let trashLine = ['身為一個']

  if (character === 'engineer') {
    trashLine += '工程師，' + sample(task.engineer)
  } else if (character === 'designer') {
    trashLine += '設計師，' + sample(task.designer)
  } else if (character === 'entrepreneur') {
    trashLine += '創業家，' + sample(task.entrepreneur)
  }

  trashLine += '，' + sample(phrase) + '！'

  return trashLine
}

// export generatePassword for other files to be able to use
module.exports = talkTrash