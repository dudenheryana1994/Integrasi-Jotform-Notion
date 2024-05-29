import fetch from 'node-fetch';

const NOTION_TOKEN = 'secret_KvoXw2qS6zwfI4z3aexw15PznhUMW1VcGj1PlrMCzQO';
const DATABASE_ID = '4aa3ee238a9c4fef9b73d8d636134a14';

async function createPage(data) {
    const createUrl = 'https://api.notion.com/v1/pages';

    const newPageData = {
        parent: { database_id: DATABASE_ID },
        properties: {
            Nama: {
                title: [
                    {
                        text: {
                            content: data.name
                        }
                    }
                ]
            },
            Email: {
                rich_text: [
                    {
                        text: {
                            content: data.email
                        }
                    }
                ]
            },
            Phone: {
                rich_text: [
                    {
                        text: {
                            content: data.phone
                        }
                    }
                ]
            },
            "Submission Date": {
                rich_text: [
                    {
                        text: {
                            content: data.submissionDate
                        }
                    }
                ]
            },
            "Approval Status": {
                rich_text: [
                    {
                        text: {
                            content: data.approvalStatus
                        }
                    }
                ]
            }
        }
    };

    console.log ('sending data to Notion:', JSON.stringify(newPageData, null, 2));

    const response = await fetch(createUrl, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${NOTION_TOKEN}`,
            'Content-Type': 'application/json',
            'Notion-Version': '2022-06-28'
        },
        body: JSON.stringify(newPageData)
    });

    const responseData = await response.json();
    console.log('Notion API Response:', response);

    return response.json();
}

export { createPage };