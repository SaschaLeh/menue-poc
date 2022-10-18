import {Directive} from '@angular/core';
import {Destroyable} from "./destroyable.directive";

@Directive()
export abstract class InnoComponent extends Destroyable {
    /**
     * TrackBy-Funktion für *ngFor, das Objekt wird durch sich selber identifiziert
     *
     * @param {number} index Index
     * @param {any} item Objekt
     * @returns {any} Objekt
     */
    public trackByItem = (index: number, item: unknown): unknown => item;

    /**
     * TrackBy-Funktion für *ngFor, das Objekt wird durch seine ID identifiziert
     *
     * @param {number} index Index
     * @param {any} item Objekt
     * @param {number | string} item.id Objekt mit ID
     * @returns {number | string} ID
     */
    public trackById = (
        index: number,
        item: {
            /**
             * ID des Objekts
             */
            id: number | string;
        },
    ): number | string => item.id;

    /**
     * TrackBy-Funktion für *ngFor, das Objekt wird durch das dtoId identifiziert
     *
     * @param {number} index Index
     * @param {any} item Objekt
     * @param {number | string} item.id Objekt mit dtoId
     * @returns {number | string} dtoId
     */
    public trackByDtoId = (
        index: number,
        item: {
            /**
             * ID des Objekts
             */
            dtoId: number | string;
        },
    ): number | string => item.dtoId;
}
