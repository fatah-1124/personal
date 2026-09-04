import type { APIRoute } from 'astro';

export const prerender = false;

const recipient = import.meta.env.CONTACT_RECIPIENT_EMAIL ?? 'fatah@deepwater.my.id';

function redirect(request: Request, status: 'sent' | 'error') {
	const url = new URL('/kontak', request.url);
	url.searchParams.set(status, '1');
	return Response.redirect(url, 303);
}

export const POST: APIRoute = async ({ request }) => {
	const apiKey = import.meta.env.RESEND_API_KEY;
	const from = import.meta.env.RESEND_FROM_EMAIL;

	if (!apiKey || !from) {
		console.error('RESEND_API_KEY atau RESEND_FROM_EMAIL belum dikonfigurasi.');
		return redirect(request, 'error');
	}

	const formData = await request.formData();
	const author = String(formData.get('author') ?? '').trim();
	const email = String(formData.get('email') ?? '').trim();
	const content = String(formData.get('content') ?? '').trim();

	const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	if (
		!author ||
		!emailIsValid ||
		!content ||
		author.length > 100 ||
		email.length > 254 ||
		content.length > 5000
	) {
		return redirect(request, 'error');
	}

	try {
		const response = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${apiKey}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				from,
				to: [recipient],
				reply_to: email,
				subject: `Saran dan kritik dari ${author}`,
				text: `Nama: ${author}\nEmail: ${email}\n\nKomentar:\n${content}`,
			}),
		});

		if (!response.ok) {
			console.error('Resend gagal mengirim email:', await response.text());
			return redirect(request, 'error');
		}
	} catch (error) {
		console.error('Koneksi ke Resend gagal:', error);
		return redirect(request, 'error');
	}

	return redirect(request, 'sent');
};
