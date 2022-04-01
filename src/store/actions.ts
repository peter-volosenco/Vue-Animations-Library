import { ActionTree, ActionContext } from 'vuex'
import { State,Actor } from './state'
import { Mutations } from './mutations'
import { ActionTypes } from './action-types'
import { MutationTypes } from './mutation-types'

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(key: K, payload: Parameters<Mutations[K]>[1]): ReturnType<Mutations[K]> 
} & Omit<ActionContext<State, State>, 'commit'>

export interface Actions {
  [ActionTypes.POST_ACTORS]({ commit }: AugmentedActionContext, payload: Actor): Promise<Actor[]>
}

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.POST_ACTORS]({ commit }, actor: Actor)  {
    let actors = await commit(MutationTypes.ADD_ACTOR, actor);
    return actors;
  },
}
