```mermaid

classDiagram

     class Content
     class ConcertoConfig
     class Feed
     class Field
     class FieldConfig
     class Group
     class Kind
     class Media
     class Membership
     class Page
     class Position
     class Screen
     class Submission
     class Subscription
     class Template
     class User
     class Booking
     class ConcertoPlugin

    ActiveModelValidator  <|-- GraphicValidator

    Feed *-- Screen

    Content <|-- DynamicContent
    Content <|-- Graphic
    
    Content <|-- TextContent
    Content <|-- ClientTime
    
    TextContent <|-- HtmlText
    TextContent <|-- Ticker

    
   
   ```