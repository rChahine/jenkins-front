import { shallowMount } from '@vue/test-utils'
import Home from '../../src/components/Home.vue'
import DashboardUser from '../../src/components/DashboardUser.vue'


const mock_choices = [
  { "choice": { "wording": "test", "id": 1 }, "nb_vote": 1, "choosen": true },
  { "choice": { "wording": "test2", "id": 2 }, "nb_vote": 1, "choosen": true },
  { "choice": { "wording": "test3", "id": 3 }, "nb_vote": 0, "choosen": false }
]

describe('Tests fetch votes', () => {

  it('test votes without being logged in', async () => {
    const wrapper = shallowMount(Home, {
      data() {
        return {
          choices: mock_choices
        }
      }
    })

    const rowVotes = wrapper.find("#row-votes")

    expect(rowVotes.html()).toBe(`<div class="row" id="row-votes"><div class="col-3"><div class="card bg-danger" style="min-width: 10rem;"><h2>test</h2><span class="mb-2">1 vote(s)</span></div></div><div class="col-3"><div class="card bg-warning" style="min-width: 10rem;"><h2>test2</h2><span class="mb-2">1 vote(s)</span></div></div><div class="col-3"><div class="card bg-info" style="min-width: 10rem;"><h2>test3</h2><span class="mb-2">0 vote(s)</span></div></div></div>`)
    
  }),
  it('test votes without being logged in', async () => {
    const wrapper = shallowMount(DashboardUser, {
      data() {
        return {
          choices: mock_choices
        }
      }
    })

    const rowVotes = wrapper.find("#row-votes")

    expect(rowVotes.html()).toBe(`<div class="row" id="row-votes"><div class="col-3"><div class="card bg-danger" style="min-width: 10rem;"><h2>test</h2><span class="mb-2">1 vote(s)</span><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16"><path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"></path><path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"></path></svg></span></div></div><div class="col-3"><div class="card bg-warning" style="min-width: 10rem;"><h2>test2</h2><span class="mb-2">1 vote(s)</span><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16"><path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"></path><path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"></path></svg></span></div></div><div class="col-3"><div class="card bg-info" style="min-width: 10rem;"><h2>test3</h2><span class="mb-2">0 vote(s)</span><!--v-if--></div></div></div>`)
    
  })
})
