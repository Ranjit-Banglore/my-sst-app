export interface Item {
    pk: string;
    sk: string;
    id: string;
    name: string;
    description: string;
    createdAt: number;
    updatedAt: number;
}

export interface ApiResponse {
    success: boolean;
    data?: Item | Item[];
    count?: number;
    error?: string;
    message?: string;
}