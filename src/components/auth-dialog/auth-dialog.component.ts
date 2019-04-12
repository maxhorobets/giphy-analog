import { Component, Vue, Emit } from 'vue-property-decorator';

@Component
export default class AuthDialogComponent extends Vue {
    @Emit('closeDialog') dialogMustBeClose(isChange: boolean) { }
    
}