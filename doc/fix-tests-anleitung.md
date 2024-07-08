# Workflow to fix the tests

1. in test/test_helper.rb set SKIP_HTW_MIGRATION = false
2. from the failing test(-messages) select one to fix, e.g. one file
3. set SKIP_HTW_MIGRATION = true
4. in the selected test file, introduce a new constant for skips, e.g.:

    SKIP_HTW_MIGRATION_FEED = SKIP_HTW_MIGRATION

5. replace all occurrences of SKIP_HTW_MIGRATION with the new constant
6. now you can toggle the skipping in this one file by setting SKIP_HTW_MIGRATION_FEED = false
7. skip by skip, delete the skip line and fix the test.
