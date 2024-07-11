```mermaid

erDiagram

    Field ||--o{ Subscription : ""
    Field ||--o{ Position : ""
    Field ||--o{ FieldConfig : ""
    Field }o--|| Kind : ""
    FieldConfig }o--o| Screen : "
    
    
```