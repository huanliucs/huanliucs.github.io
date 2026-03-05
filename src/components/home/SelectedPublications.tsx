'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { Publication } from '@/types/publication';
import { useMessages } from '@/lib/i18n/useMessages';
import { cn } from '@/lib/utils';
import { LinkIcon, DocumentTextIcon, CodeBracketIcon } from '@heroicons/react/24/outline';

interface SelectedPublicationsProps {
    publications: Publication[];
    title?: string;
    enableOnePageMode?: boolean;
}

export default function SelectedPublications({ publications, title, enableOnePageMode = false }: SelectedPublicationsProps) {
    const messages = useMessages();
    const resolvedTitle = title || messages.home.selectedPublications;
    const [expandedAbstractId, setExpandedAbstractId] = useState<string | null>(null);

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-serif font-bold text-primary">{resolvedTitle}</h2>
                <Link
                    href={enableOnePageMode ? "/#publications" : "/publications"}
                    prefetch={true}
                    className="text-accent hover:text-accent-dark text-sm font-medium transition-all duration-200 rounded hover:bg-accent/10 hover:shadow-sm"
                >
                    {messages.home.viewAll} →
                </Link>
            </div>
            <div className="space-y-4">
                {publications.map((pub, index) => (
                    <motion.div
                        key={pub.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 * index }}
                        className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg shadow-sm border border-neutral-200 dark:border-[rgba(148,163,184,0.24)] hover:shadow-lg transition-all duration-200 hover:scale-[1.02]"
                    >
                        <h3 className="font-semibold text-primary mb-2 leading-tight">
                            {pub.title}
                        </h3>
                        <p className="text-sm text-neutral-600 dark:text-neutral-500 mb-1">
                            {pub.authors.map((author, idx) => (
                                <span key={idx}>
                                    <span className={author.isHighlighted ? 'font-semibold text-accent' : ''}>
                                        {author.name}
                                    </span>
                                    {author.isCoAuthor && (
                                        <sup className={`ml-0 ${author.isHighlighted ? 'text-accent' : 'text-neutral-600 dark:text-neutral-500'}`}>#</sup>
                                    )}
                                    {author.isCorresponding && (
                                        <sup className={`ml-0 ${author.isHighlighted ? 'text-accent' : 'text-neutral-600 dark:text-neutral-500'}`}>†</sup>
                                    )}
                                    {idx < pub.authors.length - 1 && ', '}
                                </span>
                            ))}
                        </p>
                        <p className="text-sm font-medium text-neutral-700 dark:text-neutral-400 mb-3">
                            {pub.journal || pub.conference}
                        </p>

                        {/* Bottom row: buttons left, badges right */}
                        <div className="flex flex-wrap items-center gap-2">
                            {pub.doi && (
                                <a
                                    href={`https://doi.org/${pub.doi}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-accent hover:text-white transition-colors"
                                >
                                    <LinkIcon className="h-3 w-3 mr-1" />
                                    DOI
                                </a>
                            )}
                            {pub.code && (
                                <a
                                    href={pub.code}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-accent hover:text-white transition-colors"
                                >
                                    <CodeBracketIcon className="h-3 w-3 mr-1" />
                                    {messages.publications.code}
                                </a>
                            )}
                            {pub.abstract && (
                                <button
                                    onClick={() => setExpandedAbstractId(expandedAbstractId === pub.id ? null : pub.id)}
                                    className={cn(
                                        "inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium transition-colors",
                                        expandedAbstractId === pub.id
                                            ? "bg-accent text-white"
                                            : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-accent hover:text-white"
                                    )}
                                >
                                    <DocumentTextIcon className="h-3 w-3 mr-1" />
                                    {messages.publications.abstract}
                                </button>
                            )}
                            {(pub.ccf || pub.cas || pub.jcr) && (
                                <div className="ml-auto flex flex-wrap gap-1.5">
                                    {pub.ccf && (
                                        <span className={cn(
                                            "inline-flex items-center px-2 py-0.5 rounded text-xs font-bold tracking-wide",
                                            pub.ccf === 'A' ? "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400" :
                                            pub.ccf === 'B' ? "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400" :
                                            "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400"
                                        )}>
                                            CCF-{pub.ccf}
                                        </span>
                                    )}
                                    {pub.cas && (
                                        <span className={cn(
                                            "inline-flex items-center px-2 py-0.5 rounded text-xs font-bold tracking-wide",
                                            pub.cas === 'Q1' ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400" :
                                            "bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-400"
                                        )}>
                                            中科院 {pub.cas}
                                        </span>
                                    )}
                                    {pub.jcr && (
                                        <span className={cn(
                                            "inline-flex items-center px-2 py-0.5 rounded text-xs font-bold tracking-wide",
                                            pub.jcr === 'Q1' ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400" :
                                            "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-400"
                                        )}>
                                            JCR {pub.jcr}
                                        </span>
                                    )}
                                </div>
                            )}
                        </div>

                        {/* Expandable abstract */}
                        <AnimatePresence>
                            {expandedAbstractId === pub.id && pub.abstract && (
                                <motion.div
                                    key="abstract"
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="overflow-hidden mt-3"
                                >
                                    <div className="bg-white dark:bg-neutral-900 rounded-lg p-3 border border-neutral-200 dark:border-neutral-700">
                                        <p className="text-xs text-neutral-600 dark:text-neutral-500 leading-relaxed">
                                            {pub.abstract}
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}
