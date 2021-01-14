import { observable, computed } from 'mobx';
class UserDataStore {
    @observable formData: any = new FormData(undefined);

    @computed get userFormData (): any {
        return this.formData;
    };

    setFormData = (data: any): void => {
        this.formData = data;
    }
}
export default new UserDataStore();
