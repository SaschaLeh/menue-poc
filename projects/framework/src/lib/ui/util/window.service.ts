import { Injectable } from '@angular/core';

/**
 * Gibt Zugriff auf die aktuelle Window-Instanz
 */
@Injectable({ providedIn: 'root' })
export class WindowService {
    /**
     * Aktuelle Window-Instanz
     */
    public readonly nativeWindow: Window = window;
}
