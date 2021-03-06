import { Component, Vue } from 'vue-property-decorator'
import { namespace } from 'vuex-class'
import template from './list.component.html'
import './list.compoent.scss'
import { actionTypes } from '../../core/store/window-properties/actions'
import { mutationTypes } from '../../core/store/window-properties/mutations'

const localModule = namespace('windowProperties')

@Component({ template })
export default class ListPageComponent extends Vue {
    @localModule.State('list') list

    @localModule.Getter('listLength') length

    @localModule.Mutation(mutationTypes.RESTORE_LIST)
    resetList() {
    }

    @localModule.Action(actionTypes.GET_LIST)
    loadList() {
    }

    initialization() {
        const loading = this.$loading({
            lock: true,
            text: '加载中...',
            // spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        })
        return this.loadList()
            .finally(() => loading.close())
    }

    mounted() {
        return this.initialization()
    }

    destroyed() {
        this.resetList()
    }
}
