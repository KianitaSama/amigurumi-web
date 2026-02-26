import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';
import Button from '../components/common/Button.jsx';
import fondoAmigurumi from '../assets/images/fondoAmigurumi2.png';
import { ROUTES } from '../constants/routes';
import { pins } from '../constants/pins';

const HandlePublish = () => {
    const { publicationId } = useParams();
    const publication = useMemo(() => pins.find((item) => item.id === publicationId), [publicationId]);
    const galleryItems = publication?.gallery?.length
        ? publication.gallery
        : publication
            ? [{ id: `${publication.id}-hero`, url: publication.image, label: publication.title }]
            : [];

    const [activeIndex, setActiveIndex] = useState(0);
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState(publication?.comments ?? []);
    const [lens, setLens] = useState({ x: 0, y: 0 });
    const [showLens, setShowLens] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        setComments(publication?.comments ?? []);
        setActiveIndex(0);
    }, [publication]);

    const ZOOM_LEVEL = 2.3;
    const LENS_SIZE = 120;

    const updateLens = (event) => {
        const rect = containerRef.current?.getBoundingClientRect();
        if (!rect) return;
        setLens({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top
        });
    };

    const handleCommentSubmit = (event) => {
        event.preventDefault();
        if (!commentText.trim()) {
            return;
        }
        const newComment = {
            id: `c-${Date.now()}`,
            author: 'Tú',
            role: 'Comunidad',
            text: commentText.trim(),
            time: 'Ahora mismo',
            imageLabel: galleryItems[activeIndex]?.label ?? 'Imagen destacada'
        };
        setComments((prev) => [newComment, ...prev]);
        setCommentText('');
    };

    if (!publication) {
        return (
            <div className="min-h-screen flex flex-col bg-gradient-to-br from-rosado-principal/10 via-white to-beige-calido">
                <Navbar />
                <main className="flex-1 flex flex-col items-center justify-center gap-6 px-4 text-center">
                    <div className="rounded-3xl border border-rosado-principal/50 bg-white/70 p-10 shadow-2xl">
                        <p className="text-2xl font-pacifico text-gris-carbon">Publicación no encontrada</p>
                        <p className="mt-3 text-sm text-gris-carbon/60">
                            Regresa al tablero principal y elige una publicación activa para dejar tu comentario.
                        </p>
                        <Link
                            to={ROUTES.DASHBOARD}
                            className="mt-5 inline-flex items-center justify-center rounded-full border border-rosado-principal px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-rosado-principal transition hover:bg-rosado-principal/10"
                        >
                            Volver al tablero
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div
            className="min-h-screen flex flex-col font-sans"
            style={{
                backgroundImage: `linear-gradient(145deg, rgba(255, 255, 255, 0.92), rgba(255, 241, 236, 0.8)), url(${fondoAmigurumi})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            <Navbar />
            <main className="flex-1 space-y-10 px-4 py-12">
                <section className="mx-auto flex max-w-6xl flex-col gap-8 rounded-3xl border border-beige-calido/30 bg-white/80 p-6 shadow-2xl backdrop-blur-lg lg:flex-row">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="lg:w-[55%]"
                    >
                        <motion.div
                            ref={containerRef}
                            className="relative rounded-3xl border border-rosado-principal/30 bg-gradient-to-br from-white to-beige-calido p-1 shadow-lg overflow-hidden"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.4 }}
                            onMouseMove={updateLens}
                            onMouseEnter={() => setShowLens(true)}
                            onMouseLeave={() => setShowLens(false)}
                        >
                            <motion.img
                                src={galleryItems[activeIndex]?.url}
                                alt={galleryItems[activeIndex]?.label ?? publication.title}
                                className="w-full rounded-3xl object-cover"
                                whileHover={{ scale: 1.04 }}
                                transition={{ duration: 0.6 }}
                            />
                            {showLens && (
                                <div
                                    className="pointer-events-none absolute rounded-full border border-rosado-principal/40 bg-white/20"
                                    style={{
                                        width: LENS_SIZE,
                                        height: LENS_SIZE,
                                        top: lens.y - LENS_SIZE / 2,
                                        left: lens.x - LENS_SIZE / 2,
                                        backgroundImage: `url(${galleryItems[activeIndex]?.url})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: `${containerRef.current?.offsetWidth * ZOOM_LEVEL}px ${containerRef.current?.offsetHeight * ZOOM_LEVEL}px`,
                                        backgroundPosition: `${-lens.x * (ZOOM_LEVEL - 1)}px ${-lens.y * (ZOOM_LEVEL - 1)}px`,
                                        boxShadow: '0 0 20px rgba(255, 182, 193, 0.5)'
                                    }}
                                />
                            )}
                            <div className="absolute inset-0 rounded-3xl border border-rosado-principal/30 pointer-events-none"></div>
                        </motion.div>
                        <div className="mt-4 flex gap-3 overflow-x-auto">
                            {galleryItems.map((image, index) => (
                                <button
                                    key={image.id}
                                    type="button"
                                    onClick={() => setActiveIndex(index)}
                                    className={`h-20 w-20 min-w-[80px] rounded-2xl border-2 transition ${
                                        activeIndex === index ? 'border-rosado-principal' : 'border-transparent'
                                    } focus:outline-none`}
                                    aria-label={`Ver ${image.label}`}
                                >
                                    <img
                                        src={image.url}
                                        alt={image.label}
                                        className="h-full w-full rounded-xl object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </motion.div>
                    <article className="flex-1 space-y-5">
                        <div className="flex items-center justify-between text-xs uppercase tracking-[0.4em] text-gris-carbon/50">
                            <span>{publication.creator}</span>
                            <span>{publication.createdAt}</span>
                        </div>
                        <div className="space-y-3">
                            <h1 className="text-3xl font-pacifico text-gris-carbon">{publication.title}</h1>
                            <p className="text-sm leading-relaxed text-gris-carbon/70">{publication.fullDescription}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {publication.tags?.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-rosado-principal/20 bg-rosado-principal/10 px-3 py-1 text-[11px] font-semibold text-rosado-principal"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-rosado-principal/80">
                            <Link to={ROUTES.DASHBOARD} className="font-semibold">
                                Volver al tablero
                            </Link>
                            <span>·</span>
                            <span>{publication.mood}</span>
                        </div>
                    </article>
                </section>

                <section className="mx-auto max-w-6xl space-y-5 rounded-3xl border border-rosado-principal/30 bg-white/80 p-6 shadow-xl">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-gris-carbon">Comentarios sobre la publicación</h2>
                        <span className="text-[11px] uppercase tracking-[0.3em] text-gris-carbon/50">
                            {comments.length} comentarios
                        </span>
                    </div>
                    <form onSubmit={handleCommentSubmit} className="space-y-4">
                        <label htmlFor="comment" className="text-[11px] font-semibold text-gris-carbon/70">
                            Comparte una idea, pregunta o inspiración que se te ocurra
                        </label>
                        <textarea
                            id="comment"
                            value={commentText}
                            onChange={(event) => setCommentText(event.target.value)}
                            rows={3}
                            placeholder="Ese detalle que te encanta, lo que quieres probar o lo que te inspira la imagen..."
                            className="w-full rounded-2xl border-2 border-dashed border-rosado-principal/40 bg-white/80 px-4 py-3 text-sm text-gris-carbon placeholder-gris-carbon/50 focus:outline-none focus:ring-4 focus:ring-rosado-principal/30"
                        />
                        <div className="flex flex-col gap-3 text-[11px] text-gris-carbon/60 sm:flex-row sm:items-center sm:justify-between">
                            <span>
                                Comentando sobre:{' '}
                                <strong className="text-gris-carbon">{galleryItems[activeIndex]?.label}</strong>
                            </span>
                            <Button type="submit" color="rosado-principal" size="sm" className="rounded-full px-5 py-2">
                                Enviar comentario
                            </Button>
                        </div>
                    </form>
                    {comments.length === 0 ? (
                        <p className="rounded-2xl border border-dashed border-rosado-principal/40 bg-rosado-principal/5 px-4 py-6 text-sm text-gris-carbon/70">
                            No hay comentarios todavía. Sé la primera en compartir una nota.
                        </p>
                    ) : (
                        <ul className="space-y-4">
                            {comments.map((comment) => (
                                <li
                                    key={comment.id}
                                    className="rounded-3xl border border-rosado-principal/30 bg-rosado-principal/5 p-4 text-sm text-gris-carbon/80"
                                >
                                    <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-gris-carbon/50">
                                        <div className="flex items-center gap-2">
                                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xs font-black text-rosado-principal">
                                                {comment.author.charAt(0)}
                                            </div>
                                            <span className="font-semibold text-gris-carbon/80">{comment.author}</span>
                                        </div>
                                        <span>{comment.time}</span>
                                    </div>
                                    <p className="mt-3 text-sm leading-relaxed text-gris-carbon/70">{comment.text}</p>
                                    {comment.imageLabel && (
                                        <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-rosado-principal/70">
                                            Imagen: {comment.imageLabel}
                                        </p>
                                    )}
                                    <p className="mt-1 text-[11px] text-gris-carbon/50">{comment.role}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default HandlePublish;