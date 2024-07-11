```mermaid


classDiagram
    ActiveRecordBase <|-- ApplicationRecord


    ActiveRecordBase <|-- Content
    ActiveRecordBase <|-- ConcertoConfig
    
    ActiveRecordBase <|-- Feed
    ActiveRecordBase <|-- Field
    ActiveRecordBase <|-- FieldConfig
    ActiveRecordBase <|-- Group
    ActiveRecordBase <|-- Kind
    ActiveRecordBase <|-- Media
    ActiveRecordBase <|-- Membership
    ActiveRecordBase <|-- Page
    ActiveRecordBase <|-- Position
    ActiveRecordBase <|-- Screen
    ActiveRecordBase <|-- Submission
    ActiveRecordBase <|-- Subscription
    ActiveRecordBase <|-- Template
    ActiveRecordBase <|-- User

    ActiveModelValidator  <|-- GraphicValidator

    ApplicationRecord <|-- Booking
    ApplicationRecord <|-- ConcertoPlugin


    Content <|-- DynamicContent
    Content <|-- Graphic
    
    Content <|-- TextContent
    Content <|-- ClientTime
    
    TextContent <|-- HtmlText
    TextContent <|-- Ticker

    class Ability{
    }
   
   ```