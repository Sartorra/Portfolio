import {
    trigger,
    style,
    animate,
    transition,
    stagger,
    query
  } from '@angular/animations';

export const fadeInText = trigger('fadeIn', [
transition(':enter', [
    query('.text', [
        style({ 
            opacity: 0,
            transform: 'translateY(-100%)'
        }),
        stagger(200, [
            animate('1s', style({ 
            opacity: 1,
            transform: 'translateY(0)'
            }))
        ])
        ])
    ]),
]);