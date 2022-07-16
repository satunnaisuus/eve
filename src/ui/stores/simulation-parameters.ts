import { makeObservable, observable, action, runInAction } from "mobx";
import { SimulationStore } from "./simulation-store";

export class SimulationParameters {
    @observable
    private organismMaxLifetime: number = 100;

    @observable
    private organicEnergy: number = 30;

    @observable
    private photosynthesisEnergy: number = 5;

    @observable
    private chemosynthesisEnergy: number = 5;

    constructor(private store: SimulationStore) {
        makeObservable(this);
    }

    @action
    setOrganismMaxLifetime(value: number): void {
        this.store.getSimulation().setParameter('organismMaxLifetime', value).then(value => {
            runInAction(() => {
                this.organismMaxLifetime = value;
            });
        });
    }

    @action
    setOrganicEnergy(value: number): void {
        this.store.getSimulation().setParameter('organicEnergy', value).then(value => {
            runInAction(() => {
                this.organicEnergy = value;
            });
        });
    }

    @action
    setPhotosynthesisEnergy(value: number): void {
        this.store.getSimulation().setParameter('photosynthesisEnergy', value).then(value => {
            runInAction(() => {
                this.photosynthesisEnergy = value;
            });
        });
    }

    @action
    setChemosynthesisEnergy(value: number): void {
        this.store.getSimulation().setParameter('chemosynthesisEnergy', value).then(value => {
            runInAction(() => {
                this.chemosynthesisEnergy = value;
            });
        });
    }

    getOrganismMaxLifetime(): number {
        return this.organismMaxLifetime;
    }

    getOrganicEnergy(): number {
        return this.organicEnergy;
    }

    getPhotosynthesisEnergy(): number {
        return this.photosynthesisEnergy;
    }

    getChemosynthesisEnergy(): number {
        return this.chemosynthesisEnergy;
    }
}