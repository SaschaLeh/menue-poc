import { Link } from './link.interface';

/**
 * Interface zur definition einen Context um generischen Components eine spezifische Nutzung zu ermöglichen.
 * Wird z.B. von der {@link ContextDirective} genutzt um das Context-Object in die Dependency Injection zu legen.
 */
export interface Context {
    /**
     * Context type. Wird genutzt um den Kontext zu identifizieren.
     */
    type: string;
    /**
     * Referenziert verschiedene Endpunkte {@link Link} und Informationen zur Nutzung.
     */
    links: Link[];
}
