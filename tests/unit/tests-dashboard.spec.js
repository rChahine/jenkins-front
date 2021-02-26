import { shallowMount, mount } from '@vue/test-utils'
import Home from '../../src/components/Home.vue'
import Dashboard from '../../src/components/Dashboard.vue'
import DashBoardAdmin from '../../src/components/DashBoardAdmin.vue'
import DashBoardUser from '../../src/components/DashBoardUser.vue'


const mock_choices = [
  { "choice": { "wording": "test", "id": 1 }, "nb_vote": 1, "choosen": true },
  { "choice": { "wording": "test2", "id": 2 }, "nb_vote": 1, "choosen": true },
  { "choice": { "wording": "test3", "id": 3 }, "nb_vote": 0, "choosen": false }
]

describe('Test dashboard', () => {

  it('Test dashboad with user role', async () => {
    const wrapper = shallowMount(Dashboard, {
      data() {
        return {
          me: { role: 'U' }
        }
      }
    })

    expect(wrapper.find("#component").html()).toBe(`<div id="component"><!--v-if--><div><dashboard-user-stub></dashboard-user-stub></div></div>`)
  }),
  it('Test dashboad with admin role', async () => {
    const wrapper = shallowMount(Dashboard, {
      data() {
        return {
          me: { role: 'A' }
        }
      }
    })

    expect(wrapper.find("#component").html()).toBe(`<div id="component"><div><dashboard-admin-stub></dashboard-admin-stub></div><!--v-if--></div>`)
  }),
  it('Test AdminDashboard', async () => {
    const wrapper = shallowMount(DashBoardAdmin, {
      data() {
        return {
          choices: mock_choices
        }
      }
    })

    expect(wrapper.find("#admin-rows").text()).toBe(`Ajouter un utilisateur Rôle (A pour administrateur, U pour user)loginMot de passe Créer l'utilisateur  Ajouter un choix libelle Ajouter le choix Supprimer un choixLibelleNombre de votesActiontest1 Supprimertest21 Supprimertest30 Supprimer`)
  })
})
