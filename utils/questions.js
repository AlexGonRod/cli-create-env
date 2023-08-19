import { Questions } from '../src/options.js'
const { terminals, IDE } = Questions

export const terminalQuestions = [
  {
    type: 'list',
    name: 'terminal',
    message: 'Wich terminal do you want?',
    choices: terminals
  },
  {
    type: 'confirm',
    name: 'IDE',
    message: `Do you want ${IDE} to be installed?`,
    filter (val) {
      const visual = 'visual-studio-code'
      if (val === 'VSCode') return visual
    }
  },
  {
    type: 'confirm',
    name: 'custom',
    message: 'Do you want zsh as a shell?',
    when: (answers) => answers.terminal !== 'warp'
  },
  {
    type: 'confirm',
    name: 'ohmy',
    message: 'Do you want oh-my-zsh as a shell?',
    when: (answers) => answers.terminal === 'warp'
  }
]
