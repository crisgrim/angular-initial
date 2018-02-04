import { OpaqueToken } from '@angular/core';

export const value = {
    url: 'http://localhost:3000',
    path: '/api'
};

export const API_CONFIG = new OpaqueToken('api.config');
