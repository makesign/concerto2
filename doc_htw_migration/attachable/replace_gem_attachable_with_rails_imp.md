# Todos -> https://github.com/makesign/concerto2/issues/19
adapt all places where Media is handled, e.g. in the views
<%= media.file_field :attached_file %>
look for: 

    # todo: adapt for active_storage


# gem attachable is > 12 years old
https://github.com/bamnet/attachable


https://edgeguides.rubyonrails.org/active_storage_overview.html#has-many-attached

dependencies: 

libvips v8.6+ or ImageMagick for image analysis and transformations
ffmpeg v3.4+ for video previews and ffprobe for video/audio analysis
poppler or muPDF for PDF previews



# switch to  active_storage

bin/bundle add image_processing

bin/rails active_storage:install
bin/rails db:migrate



see https://edgeguides.rubyonrails.org/active_storage_overview.html#setup
for the tables:

active_storage_blobs	Stores data about uploaded files, such as filename and content type.
active_storage_attachments	A polymorphic join table that connects your models to blobs. If your model's class name changes, you will need to run a migration on this table to update the underlying record_type to your model's new class name.
active_storage_variant_records	If variant tracking is enabled, stores records for each variant that has been generated.


LoadError (Could not open library 'vips.42':
https://stackoverflow.com/questions/70849182/could-not-open-library-vips-42-could-not-open-library-libvips-42-dylib
brew install vips