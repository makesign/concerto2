classDiagram
     ApplicationRecord


     Content
     ConcertoConfig

     Feed
     Field
     FieldConfig
     Group
     Kind
     Media
     Membership
     Page
     Position
     Screen
     Submission
     Subscription
     Template
     User

    ActiveModelValidator  <|-- GraphicValidator

     Booking
     ConcertoPlugin


    Content <|-- DynamicContent
    Content <|-- Graphic
    
    Content <|-- TextContent
    Content <|-- ClientTime
    
    TextContent <|-- HtmlText
    TextContent <|-- Ticker

    
   