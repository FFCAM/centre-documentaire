CREATE OR REPLACE VIEW document_full AS
    select doc.title, auth.firstname from document doc
    INNER JOIN document_author docauth on docauth.document_id = doc.id
    INNER JOIN author auth ON author.id = document_author.author_id