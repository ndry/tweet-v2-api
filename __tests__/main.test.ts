import {tweet} from '../src/tweet'
import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'

test('tweet timestamp', async () => {
  const response = await tweet(Date.now().toString())
})

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_STATUS'] = new Date().toLocaleString('ja-JP')
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecSyncOptions = {
    env: process.env
  }
  console.log(cp.execSync(`node ${ip}`, options).toString())
})
