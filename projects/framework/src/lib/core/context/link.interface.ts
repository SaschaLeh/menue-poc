/**
 * Meta-Data Object Interface mit Informationen über einen Endpunkt.
 */
export interface Link {
    /**
     * Endpoint Adresse
     */
    href: string;
    /**
     * Rechte
     */
    permissions: string[];
    /**
     * Type
     */
    attribution: string;
}
